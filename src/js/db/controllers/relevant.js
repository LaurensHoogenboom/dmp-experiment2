//needs

const getRelevantNeeds = () => {
    const moment = getMoment();
    const totalNeedsList = needTypes;
    const selectedConcequences = moment.concequenceList;
    const needsInContext = [];

    totalNeedsList.forEach(need => {
        let relevant = false;

        need.concequenceTypes.forEach(type => {
            selectedConcequences.forEach(concequence => {
                if (type == concequence.name) {
                    relevant = true;
                }
            });
        });

        if (relevant) {
            needsInContext.push(need);
        }   
    });

    return needsInContext;
}

//value domains

const getRelevantValueDomains = () => {
    const valueRelevanceCount = parseInt(localStorage.getItem(valueRelevanceCountStorageName));
    const moment = getMoment();
    const needs = moment.needList;
    const needsForEvaluation = [];
    let relevantDomains = [];

    needs.sort((a, b) => {
        return b.intensity - a.intensity;
    });

    for (let i = 0; i < valueRelevanceCount; i++) {
        needsForEvaluation.push(needs[i]);
    }

    valueDomainTypes.forEach(domain => {
        let relevant = false;

        needsForEvaluation.forEach(need => {
            domain.needTypes.forEach(needType => {
                if (need.name == needType) {
                    relevant = true;
                }
            });
        });

        if (relevant) {
            relevantDomains.push(domain);
        }
    });

    return relevantDomains;
}

//values

const getRelevantValues = (valueType) => {
    const relevantDomains = getRelevantValueDomains();
    let relevantInstrumentalValues = [];
    
    values.forEach(value => {
        let relevant = false;

        if (value.type == valueType) {
            relevantDomains.forEach(relevantDomain => {
                value.valueDomainTypes.forEach(domainType => {
                    if (relevantDomain.name == domainType) {
                        relevant = true;
                    }
                });
            });
        }

        if (relevant) {
            relevantInstrumentalValues.push(value);
        }
    });

    return relevantInstrumentalValues;
}