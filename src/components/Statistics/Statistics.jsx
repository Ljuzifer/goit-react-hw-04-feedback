import { NotificationMessage } from '../NotificationMessage/NotificationMessage';

export const Statistics = ({ statItem: { good, neutral, bad } }) => {
  const total = good + neutral + bad;
  const percent = Math.round((good * 100) / total);

  if (total === 0) {
    return <NotificationMessage />;
  }

  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral} </p>
        </li>
        <li>
          <p>Bad: {bad} </p>
        </li>
        <li>
          <p>Total: {total} </p>
        </li>
        <li>
          <p>Positive feedback: {percent} %</p>
        </li>
      </ul>
    </div>
  );
};
