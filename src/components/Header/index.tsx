import logoImage from '../../assets/logo.svg'

export function Header() {
  return (
    <header className="w-full h-72 bg-banner-image bg-cover bg-no-repeat flex justify-center items-center">
      <img src={logoImage} alt="" />
    </header>
  )
}
