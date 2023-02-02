const PROVIDERS = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    shortDescription: "Best hairstyling services",
    description: "Best hairstyling services",
    rating: 4.9,
    reviewCount: 999,
    startingPrice: 11,
    minimumOrder: 11,
    photoUrl: "https://images.unsplash.com/photo-1588727212122-050b40395d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&w=1000&q=80",
    services: [{
      id: "1",
      name: "Haircut",
      description: "Haircut",
      price: 11,
      durationMinutes: 30
    },
      {
        id: "2",
        name: "Trimming",
        description: "Trimming",
        price: 12,
        durationMinutes: 15
      }]
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Doe",
    shortDescription: "Professional hairstylist",
    description: "Professional hairstylist",
    rating: 4.3,
    reviewCount: 12,
    startingPrice: 14,
    minimumOrder: 11,
    photoUrl: "data:image/jpeg;base64,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",
    services: [{
      id: "1",
      name: "Haircut",
      description: "Haircut",
      price: 11,
      durationMinutes: 30
    }]
  },
];

class ProviderApiService {

  searchProviders(subcategoryId: string): Promise<Array<Provider>> {
    return new Promise((resolveInner) => {
      setTimeout(() => resolveInner(PROVIDERS), 200);
    });
  }

  getProvider(id: string): Promise<Provider> {
    return new Promise((resolveInner) => {
      setTimeout(() => resolveInner(PROVIDERS.find(p => p.id === id)), 200);
    })
  }
}

export default ProviderApiService;