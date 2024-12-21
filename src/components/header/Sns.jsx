import { snsLink } from "../../Data/header";

function Sns() {
  return (
    <div className="header_sns">
      <ul>
        {snsLink.map((sns, i) => {
          return (
            <li key={i}>
              <a href={sns.url} target="_blank" rel="noopener noreferrer">
                <span>{sns.icon}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sns;
