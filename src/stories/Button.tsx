import './button.css';

type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
};

// TODO: temporary, will delete the file and parent 'stories' folder
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  onClick = () => {},
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
