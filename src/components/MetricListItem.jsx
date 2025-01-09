const MetricListItem = ({title, data, icon}) => {
    return ( 
        <li className="border-b border-gray-50 pb-2 mb-3">
            <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-500">{title}</p>
                <div className="flex gap-2 justify-between items-center">
                    <p className="font-thin tracking-wider">{data}</p>
                    {icon}
                </div>
            </div>
        </li>
     );
}
 
export default MetricListItem;