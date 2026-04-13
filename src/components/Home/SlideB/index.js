import styles from "./style.module.scss";

import Levels from "../Levels";
import LevelsNew from "../LevelsNew";

export default function SlideB({levelstexts, typestexts}) {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <Levels levelstexts={levelstexts}/>
        {/* <LevelsNew levelstexts={levelstexts}/> */}
      </div>
    </div>
  );
}
