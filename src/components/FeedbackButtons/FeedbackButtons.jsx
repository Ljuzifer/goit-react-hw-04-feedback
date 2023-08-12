import { nanoid } from 'nanoid';

export const FeedbackButtons = ({ onChangeStats, onClear, options }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={nanoid()}
          type="button"
          onClick={() => onChangeStats(option)}
        >
          {option}
        </button>
      ))}

      <button type="button" onClick={onClear}>
        clear
      </button>
    </div>
  );
};
