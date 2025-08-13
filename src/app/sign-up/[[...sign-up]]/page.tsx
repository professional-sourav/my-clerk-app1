import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return <SignUp appearance={{
    theme: 'simple',
    variables: { colorPrimary: 'blue' },
    elements: {
      footer: {
        display: 'none',
      }
    },
  }} />
}