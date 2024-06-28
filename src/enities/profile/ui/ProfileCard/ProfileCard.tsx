import { DynamicReducerLoader } from "shared/ui/DynamicReducerLoader/DynamicReducerLoader";
import { profileReducer } from "enities/profile/model/slice/profileSlice";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/redux/config/StateSchema";
import { fetchProfileData } from "enities/profile/model/services/fetchProfileData";
import { useAppDispatch } from "shared/lib/hooks/useDispatch";
import { useEffect } from "react";

interface ProfileCardProps {
    // className?: stringif
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const data = useSelector((state: StateSchema) => state.profile)
    console.log(data)

    return <DynamicReducerLoader
        keyName={'profile'}
        reducer={profileReducer}
    >
        <div>
            <p>fsdf</p>
        </div>
    </DynamicReducerLoader>
}