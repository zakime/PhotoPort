function getBetweenSlashes(input: string): string | null {
    if (typeof input !== "string") {
        throw new Error("O valor fornecido não é uma string.");
    }

    // Captura o texto entre a primeira e a segunda barra
    const match = input.match(/\/([^\/]+)\//);
    return match ? match[1] : null; // Retorna null se não encontrar
}

export type Photo = {
  id: string;
  title: string;
  category: "Paisagem" | "Urbano" | "Retrato" | "Natureza";
  imageUrl: string;
};

const publicIds = [
    "samples/animals/reindeer",
    "samples/animals/cat",
    "samples/food/dessert",
    "samples/food/pot-mussels",
    ];

const cloudName = "dpdnbwrrl";

export const photos: Photo[] = publicIds.map((id, index) => ({
  id: String(index + 1),
  title: `Foto ${index + 1}`,
  category: getBetweenSlashes(id),
  imageUrl: `https://res.cloudinary.com/${cloudName}/image/upload/${id}.jpg`,
}));

export const photos2: Photo[] = [
  {
    id: "1",
    title: "Luz nas Dunas",
    category: "Paisagem",
    imageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "2",
    title: "Trilha na Neblina",
    category: "Paisagem",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "3",
    title: "Noite na Cidade",
    category: "Urbano",
    imageUrl:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "4",
    title: "Linhas Arquitetonicas",
    category: "Urbano",
    imageUrl:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "5",
    title: "Retrato em Janela",
    category: "Retrato",
    imageUrl:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "6",
    title: "Expressao Serena",
    category: "Retrato",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "7",
    title: "Olhar Selvagem",
    category: "Natureza",
    imageUrl:
      "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "8",
    title: "Texturas da Floresta",
    category: "Natureza",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80",
  },
];
