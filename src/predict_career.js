import { careers_data } from "./data/careers_data";
import { survey_data } from "./data/survey_data";

export const predictCareer = (responses) => {
  //Step 1: Calculate Holland Code scores
  var scores = [0, 0, 0, 0, 0, 0];
  var conv, real, inv, ent, soc, art;
  conv = real = inv = ent = soc = art = 0;
  //Computing rolling averages
  for (var i = 0; i < survey_data.length; i++) {
    switch(survey_data[i].category) {
      case 1: //Conventional
        conv += 1;
        scores[0] = (scores[0] * (conv - 1) + (responses[i]) / 4.0 * 100) / conv;
        break;
      case 2: //Realistic
        real += 1;
        scores[1] = (scores[1] * (real - 1) + (responses[i]) / 4.0 * 100) / real;
        break;
      case 3: //Investigative
        inv += 1;
        scores[2] = (scores[2] * (inv - 1) + (responses[i]) / 4.0 * 100) / inv;
        break;
      case 4: //Enterprising
        ent += 1;
        scores[3] = (scores[3] * (ent - 1) + (responses[i]) / 4.0 * 100) / ent;
        break;
      case 5: //Social
        soc += 1;
        scores[4] = (scores[4] * (soc - 1) + (responses[i]) / 4.0 * 100) / soc;
        break;
      case 6: //Artistic
        art += 1;
        scores[5] = (scores[5] * (art - 1) + (responses[i]) / 4.0 * 100) / art;
        break;
    }
  }
  //console.log(scores)
  //Step 2: Euclidian distance to best-fit careers
  var dists = []; //Technically distance squared
  for (var i = 0; i < careers_data.careers.length; i++) {
    //Calculate distance
    var dist = 0.0; 
    for (var j = 0; j < 5; j++) {
      dist += (careers_data.careers[i].holland[j] - scores[j]) ** 2;
    }
    dists.push(dist);
  }
  //Sort to find 5 best careers
  var len = dists.length;
  var indices = new Array(len);
  for (var i = 0; i < len; i++) indices[i] = i;
  indices.sort(function (a, b) { return dists[a] < dists[b] ? -1 : dists[a] > dists[b] ? 1 : 0;});
  var results = [];
  for (var i = 0; i < 5; i++) {
    results.push(careers_data.careers[indices[i]]);
  }
  return results;
};
