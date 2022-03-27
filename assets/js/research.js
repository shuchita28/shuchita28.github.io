/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Crime Prediction Using Fuzzy c-means Algorithm",
    authors:
      "Shuchita Mishra, Tanvi Pradhan, Priyanka Parmar, Suvarna Maji, Ekta Sarda",
    conferences:
      "International Research Journal of Engineering and Technology (IRJET)",
    researchYr: 2018,
    citebox: "popup1",
    image: "assets/images/research-page/fcm.png",
    citation: {
      vancouver:
        "Shuchita Mishra, Tanvi Pradhan, Priyanka Parmar, Suvarna Maji, Ekta Sarda. Data mining algorithms extract relevant and unique information and patterns from crime records. International Research Journal of Engineering and Technology (IRJET), 2018.",
    },
    abstract:
      "Committing crimes and becoming a victim of such brutal crimes has become unfortunately too easy in today’s world and protection from such crimes has become a necessity. Our project aims to curb these high crime rates. We introduce data mining and clustering algorithms to predict the occurrence of crimes. Fuzzy C-Means is a useful technique to cluster offenders, identify various crime patterns, and analyze crime data. Data mining algorithms extract relevant and unique information and patterns from crime records. Clustering is done based on location of crime, gangs/offenders who are involved in the said crime and the date and time of the committed crime.",
    absbox: "absPopup1",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
