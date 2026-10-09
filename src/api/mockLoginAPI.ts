
interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

export const mockLoginAPI = async ({ email, password }: LoginCredentials): Promise<LoginResponse> => {
  console.log('API: Attempting login...');
  await new Promise<void>((resolve) => setTimeout(resolve, 800));

  if (email === 'test@example.com' && password === 'password') {
    console.log('API: Login successful');
    return { user: { name: 'Test User', email }, token: 'fake-jwt-token-xyz'};
  }
    
  console.log('API: Login failed');
  throw new Error("The email or password is not valid");
  
};