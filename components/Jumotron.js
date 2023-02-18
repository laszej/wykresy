import React from 'react';
import { useRouter } from 'next/router';

export default function Jumbotron() {
  const router = useRouter();

  return (
    <div className="jumotron">
      <div className="jumbotron jumbotron-fluid" id="jumbotron">
        <div className="container">
          <h1 className="display-4">Cats world</h1>
          <p className="lead">Find Your new best friend today. Adopt a wonder cat.</p>
          <button type="button" className="btn btn-primary" onClick={() => router.push('/about')}>
            o mnie
          </button>
        </div>
      </div>
    </div>
  );
}
