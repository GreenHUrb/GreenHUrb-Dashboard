import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usePageInfoActions } from '../../../hooks/useReduxActions';

interface AccountSettingsProps {
}

export const AccountSettings: React.FC<AccountSettingsProps> = ({ }) => {

    
    return (
        <main>
            <button>

            </button>

            <div>
                <div>
                    <div>
                        <div className="profile-photo">

                        </div>
                        <p>Edit profile photo</p>
                    </div>

                    <h3>Profile information</h3>

                </div>
            </div>
        </main>
    );
};

