import { useMemo, useState } from "react";
import { photos, type Photo } from "./data/photos";
import { PhotoModal } from "./components/PhotoModal";

type Category = "Todas" | Photo["category"];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todas");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const categories = useMemo<Category[]>(() => {
    const uniqueCategories = Array.from(new Set(photos.map((photo) => photo.category)));
    return ["Todas", ...uniqueCategories];
  }, []);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === "Todas") return photos;
    return photos.filter((photo) => photo.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="page">
      <header className="hero">
        <div className="container">
          <p className="eyebrow">Portfolio de Fotografia</p>
          <h1>Alexandre Zakime</h1>
          {/*<p>Explore fotos por categoria e clique para ampliar.</p>*/}
        </div>
      </header>

      <main className="container content">
        <section className="filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`chip ${category === selectedCategory ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </section>

        <p className="result-count">
          {filteredPhotos.length} foto{filteredPhotos.length === 1 ? "" : "s"}
        </p>

        <section className="grid">
          {filteredPhotos.map((photo) => (
            <button
              key={photo.id}
              type="button"
              className="card"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.imageUrl} alt={photo.title} />
              <div className="card-overlay">
                <h3>{photo.title}</h3>
                <p>{photo.category}</p>
              </div>
            </button>
          ))}
        </section>
      </main>

      <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </div>
  );
}
