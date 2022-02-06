import Link from "next/link";

enum Position{
    left =1,
    right = 2,
    center = 3
}

interface MenuItem{
    title: string,
    position : Position,
    subMenu? : string[]
}

interface MenuProps {
	menuItems: MenuItem[];
	menuClicked(response: MenuItem): void;
}

const Menu: React.FC<MenuProps> = (): JSX.Element => {
    return(
    <div className='bg-gray-700 p-3 w-full h-30 text-white flex flex-row justify-between font-semibold sticky top-0 z-50'>
        <div className='text-xl  w-1/5'>Jithendra Thenuwara</div>
        <div className='flex flex-row justify-center w-3/5 cursor-pointer'>
        <Link  href='/#skills'><span className='hover:text-gray-400 px-3 py-1 bg-green-600'> Skills</span></Link>
            <Link  href='/#experience'><span className='hover:text-gray-400 px-3 py-1'> Experience</span></Link>
            <span className='hover:text-gray-400 px-3 py-1'> Qualifications</span>
        </div>

        <div className='flex flex-row justify-end w-1/5'>
            <button className='bg-green-600 px-3 py-1  hover:bg-green-800 rounded-full'>Let's Play</button>
        </div>

    </div>);
}

export default Menu;