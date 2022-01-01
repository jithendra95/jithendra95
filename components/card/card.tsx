
interface CardProps {
    items?: string[];
    title?: string;
    className?: string;
}

const Card: React.FC<CardProps> = ({ items, title, children, className }): JSX.Element => {
    return (
        <div className={'bg-gray-700 rounded-xl fade-in-down '+ className}>
            <div className='flex flex-col w-full pl-4'>
                <div className='font-bold text-md pt-2 text-green-500'>{title}</div>
                <div className='flex flex-row flex-wrap mt-8 pb-4 font-semibold text-xl text-center text-white'>
                    {
                        items?.map((item, i) => {
                            return (<div className='text-sm m-2 py-1 px-3 rounded-xl mx-2 bg-green-600 hover:bg-pink-600 cursor-pointer'> {item} </div>);
                            //return (<div className='mx-3 my-2' key={i}>{item}</div>);
                        })
                    }

                    {children}
                </div>
            </div>
        </div>);
}

export default Card;