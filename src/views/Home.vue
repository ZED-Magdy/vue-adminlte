<template>
  <Layout>
  <!-- Main content -->
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
  </Layout>
  <!-- /.content -->
</template>

<script>
  // @ is an alias to /src
  import Layout from './layouts/main'
  export default {
    name: 'Home',
    components:{
      Layout
    }
  }
</script>