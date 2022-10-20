import * as React from 'react';

export default function Card({ data }: any) {
  return (
    <div
      style={{
        width: 236,
        borderRadius: 10,
        background: '#484552',
        padding: '12px 8px',
      }}
    >
      <h3 style={{ textAlign: 'center', color: data?.status === '1' ? 'green' : 'red' }}>
        {data.id || 'Not found .id'}
      </h3>

      <p
        style={{
          borderRadius: 8,
          padding: '4px 8px',
          marginBottom: 10,
          marginTop: 12,

          color: 'white',
          fontSize: 18,
          background: '#5A86DE',
        }}
      >
        Dòng
      </p>

      {data?.current?.map((item: any, index: number) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 8px',

            color: '#5A86DE',
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          <p style={{ marginBlock: 'unset' }}>{item.key}</p>
          <p style={{ marginBlock: 'unset' }}>{item.value}</p>
        </div>
      ))}

      {/* ============================ */}
      <p
        style={{
          borderRadius: 8,
          padding: '4px 8px',
          marginBottom: 10,
          marginTop: 24,

          color: 'white',
          fontSize: 18,
          background: '#FB7936',
        }}
      >
        Áp
      </p>

      {data?.voltage?.map((item: any, index: number) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 8px',

            color: '#FB7936',
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          <p style={{ marginBlock: 'unset' }}>{item.key}</p>
          <p style={{ marginBlock: 'unset' }}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}
