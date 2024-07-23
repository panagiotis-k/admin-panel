import User from "./User";
import { useState } from "react";

function UserList({ users, loading, onSelect }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const loadingUsersIndxs = [1,2,3,4,5,6,7,8,9,10]; 

  function handleClickedUser(user) {
    onSelect(user);
    setSelectedUser(user);
  }


  return (
    <div className="user-list">
        {loading ? 
            loadingUsersIndxs.map((loadingUserIndx) => (
                <User key={loadingUserIndx} loading={true} />
            )) : (
                users.map((user) => (
                <User
                    key={user.id}
                    user={user}
                    onClick={() => handleClickedUser(user)}
                    isSelected={user === selectedUser}
                    loading={false}
                />
            ))
        )}
    </div>
  );
}

export default UserList;
