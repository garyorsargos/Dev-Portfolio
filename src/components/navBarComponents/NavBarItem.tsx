interface Props {
  text: string;
  href: string;
}

const NavBarItem = ({text, href}: Props) => {
  return (
      <div>
        <a href={href}>{text}</a>
      </div>
  )
}

export default NavBarItem
