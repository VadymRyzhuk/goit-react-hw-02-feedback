import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <section className={css.section}>
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
};

export { Section };
