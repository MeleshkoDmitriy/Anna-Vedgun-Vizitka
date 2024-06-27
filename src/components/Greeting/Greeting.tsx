import styles from './Greeting.module.scss';
import '../.././styles/global.scss';
import image from '../../assets/images/user/avatar.png';
import { Contacts } from '../../constants/Contacts';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { IconLink } from '../common/IconLink/IconLink';

export const Greeting = () => {
  return (
    <section className="blockWhite">
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={image} alt="Анна Ведьгун" title="Анна Ведьгун" />
        </div>
        <div className={styles.body}>
          <h2>Приветствую 👋🏼</h2>
          <p>Меня зовут Ведьгун Анна, я практикующий психолог :)</p>
          <p>
            Изучаю психологию уже 8 лет, а практикую 3 года. В работе использую
            когнитивно-поведенческую терапию и схема-терапию. Провожу
            индивидуальные сессии в онлайн и офлайн формате.
          </p>
          <div className={styles.contacts}>
            <IconLink
              link={Contacts.TELEGRAM}
              icon={<FaTelegramPlane />}
              size="sm"
              text="Telegram"
            />
            <IconLink
              link={Contacts.INSTAGRAM}
              icon={<FaInstagram />}
              size="sm"
              text="Instagram"
            />
            <IconLink
              link={Contacts.B17}
              icon={<MdLibraryBooks />}
              size="sm"
              text="B17"
            />
            <IconLink
              icon={<FaPhone />}
              size="sm"
              text={Contacts.PHONE_NUMBER}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
