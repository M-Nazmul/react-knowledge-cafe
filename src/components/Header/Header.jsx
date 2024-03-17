import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='px-6 pt-4 max-w-[1280px] mx-auto'>
            <div className='flex justify-between items-center py-3 border-b'>
                <h1 className='text-3xl text-black font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;