function User({user,onClick,isSelected,loading}){
    return(
        <div className={`user-item ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            {loading ? <div className="spinner"></div> : (
                <>
                    <img src={user.photo} alt={user.name} />
                    <div className="user-details">
                        <h3 className="user-name">{user.name}</h3>
                        <p className="user-email">{user.email}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default User;