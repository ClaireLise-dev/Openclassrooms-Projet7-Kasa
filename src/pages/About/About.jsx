import BannerAbout from '../../components/bannerAbout/bannerAbout';
import classes from './About.module.css';
import text from '../../data/text.json';
import Dropdown from '../../components/dropdown/dropdown'

function About() {
    return (
        <main className={classes.AboutContainer}>
            <BannerAbout />
            <section className={classes.DropdownContainer}>
                <div className={classes.DropdownAbout}>
                {text.map((text, index) => {
                    return (
                        <div className={classes.DropdownItem} key={index}>
                            <Dropdown
                            title={text.title}
                            content={text.content}
                            />
                        </div>
                        );
                    })}
                </div>
            </section>
        </main>
    )
}
export default About;