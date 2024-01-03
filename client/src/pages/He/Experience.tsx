// TODO: Adicionar mais coisas aqui e colocar o ano
export default function Experience() {
  const test = (
    <div className="timeline-block timeline-block-right">
      <div className="marker"></div>
      <div className="timeline-content">
        <h3>2022</h3>
        <span>Freelancer</span>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>
      </div>
    </div>
  );

  return (
    <div className="container">
      {test}
      {test}
    </div>
  );
}
