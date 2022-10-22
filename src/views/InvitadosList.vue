<script setup>
import {arrayInvitados } from "./../datta/invitados"

const docId = "167H9GjVKFEZzwVkM9nE4y1-n6xETyRaD1U95tumYlz8"
const urlTable = `https://docs.google.com/spreadsheets/d/${docId}/gviz/tq?tqx=out:json&gid=0`


</script>
<template>
    <a :href="urlTable" target="_blank">Download Json</a>
    <h1>Invitados</h1>

    <ul>
        <li v-for="item in arrayInvitados" key="item.id">
            {{item.id}}
            {{item.nombres}}
            {{item.personal}}
            {{item.relacion}}
        </li>
    </ul>

</template>