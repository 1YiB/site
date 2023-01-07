<script lang="ts">
    import { HeaderData } from "$lib/config";

</script>

{#each HeaderData as {name,href}}
    <a {href}>
    {name}
    </a>
{/each}
