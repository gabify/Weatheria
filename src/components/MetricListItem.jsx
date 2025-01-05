const MetricListItem = ({title, data}) => {
    return ( 
        <li className="border-b border-gray-50 pb-2 mb-3">
            <div className="flex justify-between items-center">
                <p className="font-semibold">{title}</p>
                <p className="font-thin tracking-wider">{data}</p>
            </div>
        </li>
     );
}
 
export default MetricListItem;