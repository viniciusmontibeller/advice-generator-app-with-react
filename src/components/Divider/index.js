import dividerMobile from '../../assets/pattern-divider-mobile.svg'
import dividerDesktop from '../../assets/pattern-divider-desktop.svg'

const Divider = () => {
    return (
        <picture>
            <source srcSet={dividerMobile} media="(max-width: 768px)"/>
            <img src={dividerDesktop} alt="Pattern divider"/>
        </picture>
    )
}

export { Divider }