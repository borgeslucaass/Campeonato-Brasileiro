<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">Classificação </h2>

        <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th colspan="2" class="text-left">
                Clubes
            </th>
            <th class="text-left">
                Pontos
            </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for= "(clube, index) of ListaClubes" :key="clube.id">
                <td>{{index + 1}}</td>
                <td>
                    <v-avatar size="24">
                        <img
                            :src="clube.escudo"
                            
                        >
                        </v-avatar>
                    <span class="pl-2">{{ clube.nome }} </span>
                </td>
                <td>{{ clube.pontos }}</td>
            </tr>
        </tbody>
        </template>
  </v-simple-table>

    </v-container>
</template>

<script>
export default {
    name: 'ClubesLista',
    data(){
        return{
            ListaClubes: [{
  "escudo" : "https://ssl.gstatic.com/onebox/media/sports/logos/OWVFKuHrQuf4q2Wk0hEmSA_48x48.png",
  "id" : 1,
  "nome" : "Internacional",
  "pontos" : 27
}, {
  "escudo" : "https://ssl.gstatic.com/onebox/media/sports/logos/orE554NToSkH6nuwofe7Yg_48x48.png",
  "id" : 2,
  "nome" : "Flamengo",
  "pontos" : 32
}, {
  "escudo" : "https://ssl.gstatic.com/onebox/media/sports/logos/tCMSqgXVHROpdCpQhzTo1g_48x48.png",
  "id" : 3,
  "nome" : "Corinthians",
  "pontos" : 35
}, {
  "escudo" : "https://ssl.gstatic.com/onebox/media/sports/logos/7spurne-xDt2p6C0imYYNA_48x48.png",
  "id" : 4,
  "nome" : "Palmeiras",
  "pontos" : 19
}, {
  "escudo" : "https://ssl.gstatic.com/onebox/media/sports/logos/me10ephzRxdj45zVq1Risg_48x48.png",
  "id" : 5,
  "nome" : "Fortaleza",
  "pontos" : 29
}]
        }
    },
    
    
}
</script>