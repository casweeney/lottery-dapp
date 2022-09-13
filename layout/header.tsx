import ConnectButton from "../components/connectButton";

const Header = () => {
    return (
        <header className="w-11/12 mx-auto">
            <div className="flex items-center justify-between p-6">
                <div className="text-4xl text-white">PlaytoEarn</div>
                <div>
                    <ConnectButton />
                </div>
            </div>
        </header>
    );
}

export default Header;