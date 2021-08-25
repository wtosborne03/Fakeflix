import "./Profile.scss"

import Credits from "../../components/Credits/Credits";

import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";

const ProfilePage = () => {

    return (
        <motion.div
            className="Homepage"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div>
                Change Profile Icon.
            </div>
            <Credits />
        </motion.div>
    )
}

export default ProfilePage