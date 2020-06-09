<template>
  <div class="wrapper" id="app">

        <!-- Navbar -->
        <navbar v-if="$store.getters['auth/isLoggedIn']"></navbar>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <sidenav v-if="$store.getters['auth/isLoggedIn']"></sidenav>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header" v-if="$store.getters['auth/isLoggedIn']">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark">{{ $router.history.current.name }}</h1>
                        </div><!-- /.col -->
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item">
                                    <router-link to="/">Home</router-link>
                                </li>
                                <li class="breadcrumb-item active">{{$router.history.current.name || 'Dashboard'}}</li>
                            </ol>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->
            <slot/>
            </div>
        <!-- /.content-wrapper -->

        <!-- Control Sidebar -->
        <controlside v-if="$store.getters['auth/isLoggedIn']"></controlside>
        <!-- /.control-sidebar -->
        <mainFooter v-if="$store.getters['auth/isLoggedIn']"></mainFooter>
        <!-- Main Footer -->
        </div>
</template>
<script>
import navbar from '../../components/navbar'
    import sidenav from '../../components/sidenav'
    import controlside from '../../components/controlside'
    import mainFooter from '../../components/mainFooter'
    export default {
        components: {
            navbar,
            sidenav,
            controlside,
            mainFooter
        }
}
</script>