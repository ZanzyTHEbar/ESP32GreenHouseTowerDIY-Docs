---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

import { members } from '../static/members'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      <div class="text-[#ab5ac7]">
        Our Team
      </div>
    </template>
    <template #lead>
      The development of this project is guided by an international
      team, some of whom have chosen to be featured below.<br>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="medium"
    :members="members"
  />
  <VPTeamPageSection>
    <template #title>Philosophy</template>
    <template #lead>
        The <a class="custom-links" href="/intro" target="_blank">guides</a> on this website include some of our teams own notes (not all of them are polished) that we disclose for other people to use.<br>
        <br>
        Here, we hope you may find something useful to you.<br>
        <br>
        We advocate the <a class="custom-links" href="https://en.wikipedia.org/wiki/Open-source_model" target="_blank">Open Source model</a>.<br>
        <br>
        This is why we strive to make our work open to other people for consultation, replication and reuse.
    </template>
  </VPTeamPageSection>
</VPTeamPage>
