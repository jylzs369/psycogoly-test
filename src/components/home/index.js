import React from 'react';
import { Link } from "react-router-dom";
import './index.css';

function Home () {
  return (
    <section className="home">
      <header className="home__header">
        <h1 className="home__title">中科院心理咨询基础培训</h1>
        <h2 className="home__subtitle">（2020年8月题库）</h2>
      </header>
      <main>
        <ul className="home__list">
          <li className="home__list__item"><Link to="/whole">全部试题</Link></li>
          <li className="home__list__item"><Link to="/subject">单元测试</Link></li>
          <li className="home__list__item"><Link to="/testing">模拟测试</Link></li>
        </ul>
      </main>
    </section>
  );
}

export default Home;
