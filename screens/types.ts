// types.ts
export type RootStackParamList = {
    Home: undefined; // No parameters expected
    Menu: { newCourse?: { name: string; type: string; price: string; description: string } }; // Update as per your needs
    Chef: undefined; // No parameters expected
  };
  