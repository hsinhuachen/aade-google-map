<?php /** Template Name: contact */  ?>
<?php 
$check_title_now = 'contact';
get_header(); 
?>
<?php include('nav.php') ?>
<main id="contact">
    <div class="d-flex align-items-center">
        <h1 class="o-page-title"><?php the_title('') ?></h1>
        <?php include('body-braille.php')?>
    </div>
    <div class="container">
          <div class="row no-gutters top-title">
                  <div class="col-12 row no-gutters zh-project">
                        <div class="col-12 plan">
                              <?php echo get_option('zh_plan'); ?>
                        </div>
                  </div>
                <div class="col-12 row no-gutters en-project">
                      <div class="col-12 plan">
                            <?php echo get_option('en_plan'); ?>
                      </div>
                </div>
          </div>
    	  <div class="row no-gutters">
    	  		<div id="map" class="col-12">
    	  		      <google-map :id="'contact'"></google-map>
    	  		</div>
    	  </div>
    	  <div class="row no-gutters">
                <div class="col-md-6 row no-gutters zh-project">
                      <div class="col-12 col-sm-6 tel">
                            <div class="title">辦公室電話:</div>
                            <div class="info"><?php echo get_option('tel'); ?></div>
                      </div>
                      <div class="col-12 col-sm-6 mail">
                            <div class="title">電子信箱:</div>
                            <div class="info"><?php echo get_option('email'); ?></div>
                      </div>
                      <div class="address col-12">
                            <div class="title">地址:</div>
                            <div class="info"><?php echo get_option('address'); ?></div>
                      </div>
                </div>
    	  		<div class="col-md-6 row no-gutters en-project">
    	  			  <div class="col-sm-6 col-12 tel">
    	  			  		<div class="title">Phone:</div>
    	  			  		<div class="info"><?php echo get_option('en_tel'); ?></div>
    	  			  </div>
    	  			  <div class="col-sm-6 col-12 mail">
    	  			  		<div class="title">E-mail:</div>
    	  			  		<div class="info"><?php echo get_option('email'); ?></div>
    	  			  </div>
    	  			  <div class="address col-12">
    	  			  		<div class="title">Address:</div>
                            <div class="info"><?php echo get_option('en_address');?></div>
    	  			  </div>
    	  		</div>
    	  </div>
    </div>  
</main>
<?php 
get_footer();
?>