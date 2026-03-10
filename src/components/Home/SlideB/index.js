import styles from "./style.module.scss";

import Levels from "../Levels";

export default function SlideB({levelstexts}) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Levels levelstexts={levelstexts}/>
      </div>
    </div>
  );
}
