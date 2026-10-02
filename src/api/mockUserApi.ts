export const fetchUserDataApi = async () => {
  console.log('API: Fetching user data...');
  await new Promise((resolve) => setTimeout(resolve, 800));
  console.log('API: User data fetched!');
  return (
    {
      name: 'Anne Zwift',
      email: 'anne@example.com',
    }
  );
};