interface AuthServiceProps{
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export default function authService(): Promise<AuthServiceProps> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'dfadfafasaddaf',
        user: {
         name: 'ghabriel',
         email: 'ghsouza1013@gmail.com'
        }
      })
    }, 2000)
  })
}