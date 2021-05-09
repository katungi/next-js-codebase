import { Result, Button } from 'antd';
import Link from 'next/link';

export default function Success({ data }) {
  return (
    <Result
      status='success'
      title='Successfully Booked an Experience'
      subTitle={`You just joined ${data.title} hosted by :  ${data.experienceCreator.name}`}
      extra={[
        <Button
          type='primary'
          shape='round'
          size='large'
          style={{ background: '#f53398', borderColor: 'white' }}
          key='console'
        >
          Booked Experience
        </Button>,
        <Button
          type='primary'
          shape='round'
          size='large'
          style={{ background: '#f53398', borderColor: 'white' }}
        >
          <Link href='/experiences'>
            <a>Explore More Experience</a>
          </Link>
        </Button>,
      ]}
    />
  );
}

export async function getServerSideProps({ params, res }) {
  try {
    const { id } = params;
    const result = await fetch(
      `https://hostguest.herokuapp.com/api/experiences/${id}`
    );
    const data = await result.json();
    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
}
