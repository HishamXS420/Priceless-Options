const Link = ({route}) => {
  return (
    <li className="mr-8">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

// Link.propTypes = 

export default Link;
