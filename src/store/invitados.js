import { ref } from "vue"
import {dataGuest} from "./classes"
let fullContent = 'google.visualization.Query.setResponse({"version":"0.6","reqId":"0","status":"ok","sig":"1605307927","table":{"cols":[{"id":"A","label":"Nombre de todos los invitados","type":"string"},{"id":"B","label":"Cantidad - Personal()","type":"number","pattern":"General"},{"id":"C","label":"Vinculo","type":"string"},{"id":"D","label":"mesa","type":"string"}],"rows":[{"c":[{"v":"Elias Claudia "},{"v":1.0,"f":"1"},{"v":"madre"},{"v":null}]},{"c":[{"v":"Rivero Abel "},{"v":2.0,"f":"2"},{"v":"Hermano"},{"v":null}]},{"c":[{"v":"Rivero Pamela "},{"v":4.0,"f":"4"},{"v":"Tia "},{"v":null}]},{"c":[{"v":"Suarez Carla "},{"v":2.0,"f":"2"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Umaño Esther "},{"v":1.0,"f":"1"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Coroleu Santiago "},{"v":2.0,"f":"2"},{"v":"Amigo "},{"v":null}]},{"c":[{"v":"Rodriguez Cristián "},{"v":2.0,"f":"2"},{"v":"Amigo "},{"v":null}]},{"c":[{"v":"Leguizamón José "},{"v":1.0,"f":"1"},{"v":"Amigo "},{"v":null}]},{"c":[{"v":"Bravo Romina "},{"v":2.0,"f":"2"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Juarez Yaqueline "},{"v":1.0,"f":"1"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Sandez Mailen "},{"v":1.0,"f":"1"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Pintos Andrea "},{"v":1.0,"f":"1"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Siragusa Maria "},{"v":2.0,"f":"2"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Psenner Julia"},{"v":1.0,"f":"1"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Torricelli Facundo "},{"v":2.0,"f":"2"},{"v":"Amigo "},{"v":null}]},{"c":[{"v":"Urtubey Andrea"},{"v":2.0,"f":"2"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Mema Leisa"},{"v":2.0,"f":"2"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"David Diaz"},{"v":2.0,"f":"2"},{"v":"Amigo"},{"v":null}]},{"c":[{"v":"Carrizo Ariel"},{"v":1.0,"f":"1"},{"v":"Amigo"},{"v":null}]},{"c":[{"v":"Campos Maria"},{"v":1.0,"f":"1"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Gastaminza Paola"},{"v":1.0,"f":"1"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Orieta Gabriela "},{"v":2.0,"f":"2"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Luna Eliana"},{"v":1.0,"f":"1"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Ibarra Viviana"},{"v":2.0,"f":"2"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Ortopan Sara"},{"v":1.0,"f":"1"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Cabrera Valentina"},{"v":1.0,"f":"1"},{"v":"Amiga "},{"v":null}]},{"c":[{"v":"Auad Victor"},{"v":1.0,"f":"1"},{"v":"Amigo "},{"v":null}]},{"c":[{"v":"Dorado Eugenia"},{"v":1.0,"f":"1"},{"v":"Tia"},{"v":null}]},{"c":[{"v":"Banegas Gabriela"},{"v":1.0,"f":"1"},{"v":"Tia"},{"v":null}]},{"c":[{"v":"Vega Karina"},{"v":1.0,"f":"1"},{"v":"Tia "},{"v":null}]},{"c":[{"v":"Conde Priscilla "},{"v":1.0,"f":"1"},{"v":"Amiga"},{"v":null}]},{"c":[{"v":"Fernandez Carlos "},{"v":2.0,"f":"2"},{"v":"Amigo"},{"v":null}]}],"parsedNumHeaders":1}});'


export const arrayInvitados = ref([])


    fullContent =  fullContent.replace('google.visualization.Query.setResponse(', "")
    fullContent = fullContent.replace(");", "")
    fullContent = JSON.parse(fullContent)
    const obj = fullContent.table.rows

    obj.forEach((invited, i) => {
        const newInvited = new dataGuest({
            id: i,
            nombres : invited.c[0].v,
            personal : invited.c[1].v,
            relacion: invited.c[2].v
        })

        arrayInvitados.value.push(newInvited)
    } )
