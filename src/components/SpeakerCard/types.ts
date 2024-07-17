import { ProfileCardProps } from "../ProfileCard/types"

export interface SpeakerCardProps extends ProfileCardProps {
    label: string
    tags: string[]
    hour: string
<<<<<<< HEAD
=======
    isSaved: boolean
>>>>>>> be0c5b7783381cf9f53e4a934126eeefeddc806a
    onChangeMode: (mode: boolean) => void
}