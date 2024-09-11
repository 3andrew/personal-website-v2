export async function getServerSideProps() {
    return {
        redirect: {
        destination: '/resume.pdf',
        permanent: false,
        },
    }
}
  
export default function Resume() {
    return null; 
}
  