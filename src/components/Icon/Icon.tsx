type Props = {
  icon: string,
  size?: 'small' | 'medium',
}

const Icon = ({ icon, size = 'medium' }: Props) => {
  const getSize = () => {
    if (size === 'small') {
      return {
        width: 16,
        height: 16,
      }
    }
    return {
      width: 24,
      height: 24,
    }
  }

  return (
    <svg role="img" viewBox="0 0 24 24" {...getSize()}>
      <path d={icon} />
    </svg>
  );
};

export default Icon;