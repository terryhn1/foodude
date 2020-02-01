import React from "react"; 

class Card extends React.Component {
    render(){
        return <React.Fragment>
        <div className="Content"> 
          <div className="container" >
              <div className="card mb-3"style={{"height": "20vw", "borderRadius":"50px", "backgroundColor": "#353b48"}} >
                  <div className="ShopDetails">
                        <div className="col-md-4 ShopImage" >
                          <img alt = "" style={{"borderRadius": "50px", width: "24vw"}}src="https://s3-media4.fl.yelpcdn.com/bphoto/rPopevlTEzAlyIYJSHiRWQ/o.jpg"/>
                        </div>
                        <div className="col-md-8    ">
                                <h4 style={{"paddingTop": "10px","color":"beige", "fontSize":"1.5vw", "paddingLeft":"15px"}}> Name </h4>
                                <h4 style={{"fontSize":"1.5vw", "color":"beige","paddingLeft":"15px"}}> location </h4>
                                <h2 style={{"font-size":"1.5vw","paddingLeft":"15px"}}>$$$$</h2>
                                <p style={{"font-size":"1.5vw","paddingLeft":"15px"}}>DESCRIPTIOnDESCRIPTIOnDESCRIPTIOnDESCRIPTIOnDESCRIPTIOn</p>
                        </div>
                        <div className="col-md-2">
                        <div style={{"paddingTop": "10vh","paddingLeft": ".5vw"}}>
                            <img alt = "" style={{"width":"3vw"}} src="https://i.imgur.com/TFk7613.png"/>
                        </div>
                        <div style={{"paddingTop": "0vh","paddingLeft": ".5vw"}}>
                            <p style={{"color":"#353b48"}}>234567</p>
                        </div>
                        <div style={{"paddingTop": "0vh", "paddingLeft": ".5vw"}}>
                            <img alt = "" style={{"width":"3vw"}} src="https://i.imgur.com/dDgXHdb.png?1"/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    }
}

export default Card; 