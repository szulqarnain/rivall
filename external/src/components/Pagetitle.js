import React,{Component} from 'react';

class Pagetitle extends Component {
    render() {
        const {title,bg} = this.props;
        return (
            <div className={`card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3 ${bg === 'transparent' ? 'bg-[#00000069]': 'bg-white'}`}>
                <h2 className={`fw-700 mb-0 mt-0 font-md  d-flex align-items-center ${bg === 'transparent' ? 'text-white': 'text-grey-900'} `}>{title}
                <form action="#" className="pt-0 pb-0 ms-auto">
                    <div className="search-form-2 ms-2">
                        <i className="ti-search font-xss"></i>
                        <input type="text" className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0" placeholder="Search here." />
                    </div>
                </form>
                <a href="/" className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"><i className="feather-filter font-xss text-grey-500"></i></a>
                </h2>
            </div>            
        );
    }
}

export default Pagetitle;


